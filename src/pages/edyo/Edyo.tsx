import { Grid, Typography } from "@mui/material"
import { MeuHeader } from "../../shared/components"
import { MeuFeedback } from "../../shared/components/meu-feedback/MeuFeedback"
import MeuMenu from "../../shared/components/meu-menu/MeuMenu"


const Edyo = () => {
    return (
        <Grid sx={{
            display: 'flex',
            alignItems: 'start',
            minHeight: '100vh',
        }} container>

            <Grid item xs={12}>
                <MeuHeader texto='Edyo Campos' titulo='Página de feedbacks' url='https://avatars.githubusercontent.com/u/92989768?v=4' />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={9}>
                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Matheus
                    </Typography>
                    <MeuFeedback feedback="Responsável" />
                    <MeuFeedback feedback="Muito paciente" />
                    <MeuFeedback feedback="Comunicação bem desenvolvida" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Mauricio
                    </Typography>
                    <MeuFeedback feedback="Boa comunicação" />
                    <MeuFeedback feedback="Perfil de liderança" />
                    <MeuFeedback feedback="Possui perfil colaborativo" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Leo
                    </Typography>
                    <MeuFeedback feedback="Paciente" />
                    <MeuFeedback feedback="Assertivo" />
                    <MeuFeedback feedback="Perfil de liderança" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Rogerio
                    </Typography>
                    <MeuFeedback feedback="Facilidade em criar soluções" />
                    <MeuFeedback feedback="Liderança" />
                    <MeuFeedback feedback="Facilidade de interagir com as pessoas" />
                </Grid>

                <Grid item xs={12} md={3}>
                    <MeuMenu nome='Edyo Campos' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Edyo