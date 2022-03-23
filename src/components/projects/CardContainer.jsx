import React from 'react'
import Card from '../Card'

const CardContainer = () => {
    return (
        <div className='xs:px-3 sm:px-0 flex flex-col items-center justify-around md:flex-row my-16 xs:gap-5 md:gap-3'>
            <Card 
              title={'The Grand Exchange'} 
              tech={["React", "Tailwind", "Framer Motion", "Axios"]} 
              links={{ghLink: 'https://github.com/AaronCQuinn/the-grand-exchange-v2', liveLink: 'https://optimistic-payne-e5c677.netlify.app/'}}
              desc={`React application pulling and charting historical pricing information from the OSRS Wiki & RuneLite API. If you're unfamiliar, some example items to search for: Shortbow, Raw cod, Tinderbox.`}
            />
            <Card 
              title={'Aarons Adoptions'} 
              tech={["NodeJS", "Bootstrap", "ExpressJS", "MongoDB"]} 
              links={{ghLink: 'https://github.com/AaronCQuinn/Adoption-Website', liveLink: 'https://www.aaronsadoptions.ca'}}
              desc={`A mock adoption services website where the administrators to the website can easily control the flow of incoming and out going foster animals. My largest project to date, heavily focused on the backend.`}
            />
            <Card 
              title={'Feedback Application'} 
              tech={["React", "CSS", "Framer Motion", "React-router-dom"]} 
              links={{ghLink: 'https://github.com/AaronCQuinn/Feedback-Application', liveLink: 'https://nifty-carson-e7016c.netlify.app/'}}
              desc={`My first small sized React project. A client sided feedback tool which a user can submit, edit, and delete feedback which has been submitted. The app also displays the average feedback rating.`}
            />
        </div>
    )
}

export default CardContainer