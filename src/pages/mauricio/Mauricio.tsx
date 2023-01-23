import { Grid, Typography } from "@mui/material"
import { MeuHeader } from "../../shared/components"
import { MeuFeedback } from "../../shared/components/meu-feedback/MeuFeedback"
import MeuMenu from "../../shared/components/meu-menu/MeuMenu"

const Mauricio = () => {
    return (
        <Grid sx={{
            display: 'flex',
            alignItems: 'start',
            minHeight: '100vh',
        }} container>

            <Grid item xs={12}>
                <MeuHeader texto='Mauricio Lima' titulo='Página de feedbacks' url='https://avatars.githubusercontent.com/u/103398962?v=4' />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={9}>
                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Matheus
                    </Typography>
                    <MeuFeedback feedback="Bom raciocínio lógico" />
                    <MeuFeedback feedback="Curva de aprendizado acima da média" />
                    <MeuFeedback feedback="Comunicação eficiente" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Leo
                    </Typography>
                    <MeuFeedback feedback="Comunicativo" />
                    <MeuFeedback feedback="Empático" />
                    <MeuFeedback feedback="Extrovertido" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Edyo
                    </Typography>
                    <MeuFeedback feedback="Companheiro" />
                    <MeuFeedback feedback="Nobre de espírito" />
                    <MeuFeedback feedback="Empenhado" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Rogerio
                    </Typography>
                    <MeuFeedback feedback="Adaptável" />
                    <MeuFeedback feedback="Empático" />
                    <MeuFeedback feedback="Bom ouvinte" />
                </Grid>

                <Grid item xs={12} md={3}>
                    <MeuMenu nome='Mauricio Lima' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Mauricio