import React from 'react';
import initialData from "../../initial-data";
import Column from "../Column";
import Search from "../Search";

import { DragDropContext } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
import styled from "styled-components";
import API from "../../utils/API.js"


//don't change droppale/draggable dimensions during a drag
//udate styles within snapshot as opposed to in props
const Container = styled.div`
    display: flex
`;
export default class Itinerary extends React.Component {

    state = {
        initialData,
        search: "",
        result: []
    }

    onDragStart = () => {
        document.body.style.color = "orange"
        document.body.style.transition = 'black'
    }

    onDragUpdate = update => {
        const { destination } = update;
        const opacity = destination
            ? destination.index / Object.keys(this.state.initialData.tasks).length
            : 0;
        document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`

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

        const start = this.state.initialData.columns[source.droppableId];
        const finish = this.state.initialData.columns[destination.droppableId]

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
                ...this.state.initialData,
                columns: {
                    ...this.state.initialData.columns,
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
            ...this.state.initialData,
            columns: {
                ...this.state.initialData.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState(newState);




    }

    searchBreweries = query => {
        alert("in searchBreweries")
        API.getBreweries(query)
            .then(res => {
                console.log("front end", res)
                this.setState({ result: res.data })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {



        const { name, value } = event.target

        this.setState({
            [name]: value
        })

    }

    handleSubmit = event => {
        event.preventDefault();

        console.log("submitted")
        console.log("state", this.state.result)
        this.searchBreweries(this.state.search);

    }



    render() {
        return (

            <>


                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}

                />
                <div className="results">
                

                    {this.state.result.length ? (
                        <div>
                            {this.state.result.map( brewery => (
                                
                                
                            
                                <div >
                                  Name: { brewery.name}  Status: {brewery.status }
                                  Location: { brewery.street}  city: { brewery.city}  State: { brewery.state}
                                </div>
                            ))}
                        </div>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>

                <DragDropContext
                    onDragEnd={this.onDragEnd}
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                >
                    <Container>

                        {this.state.initialData.columnOrder.map(columnId => {
                            const column = this.state.initialData.columns[columnId];
                            const tasks = column.taskIds.map(taskId => this.state.initialData.tasks[taskId]);

                            return <Column key={column.id} column={column} tasks={tasks} />
                        })}
                    </Container>
                </DragDropContext>
            </>
        );

    }
}




