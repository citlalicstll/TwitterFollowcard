export function TwitterFollowCard ({username, name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${username}`   
    const addAt =(username) => `@${username}`

    return(
        <article className='tw-folow-card'>
            <header className='tw-folow-card-header'>
                <img 
                className='tw-folow-card-avatar'
                alt="Avatar" 
                src={imageSrc}/>
                <div className='tw-folow-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-folow-card-infoUserName'>{addAt(username)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-folow-card-button'>Seguir</button>
            </aside>
        </article>
    )
}