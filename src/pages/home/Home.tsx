import { MeuHeader } from "../../shared/components"
import { MeuCard } from "../../shared/components/meu-card/MeuCard"
import { Grid, Typography } from "@mui/material"

function Home(): JSX.Element {
	return (
		<Grid sx={{
			display: 'flex',
			alignItems: 'start',
			minHeight: '100vh',
		}}
			container
		>
			<Grid item xs={12}>
				<MeuHeader texto='Carolina Di Lorenzo' titulo='Mentoria de carreiras' url='https://media.licdn.com/dms/image/C5603AQElKItzQmi1rg/profile-displayphoto-shrink_800_800/0/1615568288241?e=1680134400&v=beta&t=onrv-CjuBa8D0NhE8rIMHJo4bgxXw8Pmnog077CfaQs' />
			</Grid>

			<Grid sx={{
				ml: { md: 15, xs: 0 },
				mt: 5
			}}
				item
				xs={12}
			>
				<Typography sx={{
					textAlign: { xs: 'center', md: 'start', fontSize: '1.85rem', color: '#bcb4b4' }
				}}
				>
					Selecione um aluno:
				</Typography>
			</Grid>

			<Grid sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center'
			}}
				container
			>
				<Grid sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
					container
				>
					<Grid item>
						<MeuCard nome='Matheus Mariano' url='https://media.licdn.com/dms/image/D4D03AQFlsk3zz8OgnA/profile-displayphoto-shrink_800_800/0/1665945633854?e=1680134400&v=beta&t=ukLp-3TchJ8ARg9NAoV6l-h5YGiDN4ffaA87z3qWVfY' rota='/matheus' />
					</Grid>

					<Grid item>
						<MeuCard nome='Mauricio Lima' url='https://avatars.githubusercontent.com/u/103398962?v=4' rota='/mauricio' />
					</Grid>

					<Grid item>
						<MeuCard nome='Leonardo Farah' url='https://avatars.githubusercontent.com/u/105401906?v=4' rota='/leo' />
					</Grid>
				</Grid>

				<Grid sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
					container
				>
					<Grid item>
						<MeuCard nome='Edyo Campos' url='https://avatars.githubusercontent.com/u/92989768?v=4' rota='/edyo' />
					</Grid>

					<Grid item>
						<MeuCard nome='Rogerio Silva' url='https://avatars.githubusercontent.com/u/106206470?v=4' rota='/rogerio' />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Home
