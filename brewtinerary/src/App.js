import React from 'react';
import initialData from "./initial-data"
import Column from "./components/Column"
import Header from "./components/Header"
import { DragDropContext } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
import styled from "styled-components";


//don't change droppale/draggable dimensions during a drag
//udate styles within snapshot as opposed to in props
const Container = styled.div`
    display: flex
`;
export default class App extends React.Component {
    state = initialData;

    onDragStart = () => {
        document.body.style.color = "orange"
        document.body.style.transition = 'black'
    }

    onDragUpdate = update => {
        const { destination } = update;
        const opacity = destination
            ? destination.index / Object.keys(this.state.tasks).length
            : 0;
        // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`

    }

    onDragEnd = result => {
        document.body.style.color = "inherit"
        //TODO: reorder our column

        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId]

        if (start === finish) {

            const newTaskIds = Array.from(start.taskIds);
            //order the array
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            this.setState(newState);
            return;
            //call an update after the set state to tell server an update has occured
        }


        const startTasksIds = Array.from(start.taskIds);
        startTasksIds.splice(source.index, 1);

        const newStart = {
            ...start,
            taskIds: startTasksIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState(newState);
        



    }


    render() {
        return (

          <>
          <Header></Header>
            <DragDropContext
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
            >
                <Container>

                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                        return <Column key={column.id} column={column} tasks={tasks} />
                    })}
                </Container>
            </DragDropContext>
            </>
        );

    }
}




