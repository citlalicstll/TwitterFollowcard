import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowcard'

export function App (){
    const addAt =(username) => `@${username}`

    return(
        <section className='App'>
            <TwitterFollowCard username="citlalicstll" name="Citlali Castillo" isFollowing />
            <TwitterFollowCard username="joelsanchez01" name="Joel Sanchez" isFollowing={false}/>
        </section>
    )
}