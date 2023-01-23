import { Grid, Typography } from "@mui/material"
import { MeuHeader } from "../../shared/components"
import { MeuFeedback } from "../../shared/components/meu-feedback/MeuFeedback"
import MeuMenu from "../../shared/components/meu-menu/MeuMenu"

const Rogerio = () => {
    return (
        <Grid sx={{
            display: 'flex',
            alignItems: 'start',
            minHeight: '100vh',
        }} container>

            <Grid item xs={12}>
                <MeuHeader texto='Rogerio Silva' titulo='Página de feedbacks' url='https://avatars.githubusercontent.com/u/106206470?v=4' />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={9}>
                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Matheus
                    </Typography>
                    <MeuFeedback feedback="Engraçado" />
                    <MeuFeedback feedback="Criativo para fazer análises" />
                    <MeuFeedback feedback="Comunicativo" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Mauricio
                    </Typography>
                    <MeuFeedback feedback="Flexibilidade e Resiliência" />
                    <MeuFeedback feedback="Organizado" />
                    <MeuFeedback feedback="Ético" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Leo
                    </Typography>
                    <MeuFeedback feedback="Bom contador de histórias" />
                    <MeuFeedback feedback="Criativo" />
                    <MeuFeedback feedback="Divertido" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Edyo
                    </Typography>
                    <MeuFeedback feedback="Trabalhador" />
                    <MeuFeedback feedback="Esforçado" />
                    <MeuFeedback feedback="Responsável" />
                </Grid>

                <Grid item xs={12} md={3}>
                    <MeuMenu nome='Edyo Campos' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Rogerio