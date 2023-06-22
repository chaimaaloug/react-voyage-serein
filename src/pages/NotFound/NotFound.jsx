import style from './NotFound.module.scss'


const NotFound = () => {
   
    return (
        <main className={style.container}>
            <h2 className={style.title}>400</h2>
            <p className={style.parag}> Page introuvable.</p>
        </main>
    )
}

export default NotFound;