import { Grid, Typography } from "@mui/material"
import { MeuHeader } from "../../shared/components"
import { MeuFeedback } from "../../shared/components/meu-feedback/MeuFeedback"
import MeuMenu from "../../shared/components/meu-menu/MeuMenu"

const Leo = () => {
    return (
        <Grid sx={{
            display: 'flex',
            alignItems: 'start',
            minHeight: '100vh',
        }} container>

            <Grid item xs={12}>
                <MeuHeader texto='Leonardo Farah' titulo='Página de feedbacks' url='https://avatars.githubusercontent.com/u/105401906?v=4' />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={9}>
                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Matheus
                    </Typography>
                    <MeuFeedback feedback="Consistente" />
                    <MeuFeedback feedback="Flexibilidade de ideias" />
                    <MeuFeedback feedback="Boa capacidade de comunicação" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Mauricio
                    </Typography>
                    <MeuFeedback feedback="Facilidade em comunicação. Possui comunicação eficaz" />
                    <MeuFeedback feedback="Extrovertido, animado" />
                    <MeuFeedback feedback="Sabe trabalhar em equipe. Possui empatia" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Edyo
                    </Typography>
                    <MeuFeedback feedback="Criativo" />
                    <MeuFeedback feedback="Facilidade em trabalhar em equipe" />
                    <MeuFeedback feedback="Sincero" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Rogerio
                    </Typography>
                    <MeuFeedback feedback="Empático" />
                    <MeuFeedback feedback="Adaptável" />
                    <MeuFeedback feedback="Facilidade de se comunicar" />
                </Grid>

                <Grid item xs={12} md={3}>
                    <MeuMenu nome='Leonardo Farah' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Leo