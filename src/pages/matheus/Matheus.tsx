import { Grid, Typography } from "@mui/material"
import { MeuHeader } from "../../shared/components"
import { MeuFeedback } from "../../shared/components/meu-feedback/MeuFeedback"
import MeuMenu from "../../shared/components/meu-menu/MeuMenu"

const Matheus = () => {
    return (
        <Grid sx={{
            display: 'flex',
            alignItems: 'start',
            minHeight: '100vh',
        }} container>

            <Grid item xs={12}>
                <MeuHeader texto='Matheus Mariano de Camargo' titulo='Página de feedbacks' url='https://media.licdn.com/dms/image/D4D03AQFlsk3zz8OgnA/profile-displayphoto-shrink_800_800/0/1665945633854?e=1680134400&v=beta&t=ukLp-3TchJ8ARg9NAoV6l-h5YGiDN4ffaA87z3qWVfY' />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={9}>
                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Mauricio
                    </Typography>
                    <MeuFeedback feedback="Pensamento criativo" />
                    <MeuFeedback feedback="Boa capacidade de resolução de problemas" />
                    <MeuFeedback feedback="Organizado" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Leo
                    </Typography>
                    <MeuFeedback feedback="Comunicativo" />
                    <MeuFeedback feedback="Esforçado" />
                    <MeuFeedback feedback="Sempre pronto para ajudar" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Edyo
                    </Typography>
                    <MeuFeedback feedback="Organizado" />
                    <MeuFeedback feedback="Humilde" />
                    <MeuFeedback feedback="Criativo" />

                    <Typography sx={{
                        textAlign: 'start', fontSize: '1.85rem', color: '#bcb4b4', ml: 2, mt: 2
                    }}>
                        Escrito por Rogerio
                    </Typography>
                    <MeuFeedback feedback="Companheiro" />
                    <MeuFeedback feedback="Facilidade de interação" />
                    <MeuFeedback feedback="Inovação nas soluções de problemas" />
                </Grid>

                <Grid item xs={12} md={3}>
                    <MeuMenu nome='Matheus Mariano' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Matheus