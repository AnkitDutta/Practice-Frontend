import { useState } from 'react'
import {Draggable, Droppable, DragDropContext} from 'react-beautiful-dnd'
import './dragdrop.css'


export default function DragDrop() {

  const [cards, setCards] = useState(false)

  // This will be read from localStorage (if it exists); ID will be Date.now()
  const [cardState, setCardState] = useState({"C1":[{"name":"Ankit", "id":"N1"}, {"name":"Anirban", "id":"N2"}, {"name":"Purty", "id":"N5"}], "C2":[{"name":"Kajal", "id":"N3"}, {"name":"Himali", "id":"N4"}]})

  function handleDrag(results){
    // console.log("Drag done")
    // console.log(results)
    const {source, destination} = results
    if(!destination){
        return
    }
    if(source.droppableId === destination.droppableId && source.index === destination.index){
        return
    }
    let temp = cardState
    let popped = temp[source.droppableId].splice(source.index, 1)[0]    
    temp[destination.droppableId].splice(destination.index, 0, popped)
  }

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <div >

        {/* ID will be intialized with curr datetime */}

        {   
            Object.keys(cardState).map(

                (currCard, idx)=>(
                    
                    <Droppable  droppableId={currCard} key={currCard}>
                    {(provided)=>{
                        return(
                        <div className="drop" {...provided.droppableProps} ref={provided.innerRef}>
                            {

                                cardState[currCard].map(
                                (todo, idx)=>{
                                return(
                                    <Draggable draggableId={todo["id"]} key={todo["id"]} index={idx}>
                                    {
                                        (provided)=>{
                                        return(
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef}>
                                                {todo["name"]}
                                            </div>
                                        )
                                        }
                                    }
                                    </Draggable>
                                )
                                }
                            )
                            }

                            {provided.placeholder}
                        </div>
                        )
                    }

                    }
                    </Droppable>
                )
            )
        }
      </div>
    </DragDropContext>
  )
}
