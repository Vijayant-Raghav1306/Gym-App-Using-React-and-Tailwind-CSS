import React from 'react'
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';


function Workout(props) {
  const{ workout }=props
  return (
    <SectionWrapper id={'workout'} header={"Welcome to"} title={['The', 'Danger', 'Zone']}>
          <div className='flex flex-col gap-4'>
          {workout.map((exercise,i)=> {
              return(
                <ExerciseCard i={i} exercise={exercise} key={i}/>
              )

          
          })}
          </div>
      </SectionWrapper>
  )
}

export default Workout;







