import { useState, useEffect } from "react"
import TeamService from '../../services/TeamService'
import Grid from "../../components/Grid/Grid"
import Card from "../../components/Card/Card"
import logo from "../../../ui/assets/images/valtech-logo.svg"
import ui from "./Team.module.scss"

const Team = () => {
    const [team, setTeam] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function clickHandler() {
        console.log("clicked")
    }

    useEffect(() => {
        async function fetchTeam() {
            try {
                const fetchedTeam = await TeamService.getTeam()
                setTeam(fetchedTeam)
                setError(null)
            } catch (err) {
                setError(err.message)
                setTeam(null)
            } finally {
                setLoading(false)
            }
        }
        fetchTeam()
    }, []);


    return (
        <>
            {!!loading && <p>Loading...</p>}
            {!!error && <p>Something went wrong ☠️</p>}
            {!!team && (
                <main className={ui["__wrap"]}>
                    {team.department && 
                        <Card 
                            className={ui["__header"]}
                            note={team.department.name} 
                            logo={logo}
                            title="Valtech Logo"
                            description={team.department.description}
                            image={team.department.image}
                            tag="header"
                        />
                    }
                    
                    <Grid className={ui["__grid"]}>
                        {team.offices?.map((office) => (
                            <Card 
                                key={office.id}
                                note={office.country} 
                                title={office.city} 
                                description={office.description} 
                                image={office.image}
                                onClick={clickHandler} 
                                tag="article"
                                flip={true}
                            />
                        ))}
                    </Grid>
                </main>
            )}
        </>
    )
}

export default Team