import { Box, AppBar, Toolbar, Typography, Grid, Avatar } from "@mui/material";

interface MeuHeaderProps {
    texto: string,
    url: string,
    titulo: string
}

const MeuHeader = ({ texto, url, titulo }: MeuHeaderProps) => {
    return (
        <Box sx={{
            flexGrow: 1,
            boxShadow: '0 0 15px 1px white'
        }}>
            <AppBar sx={{ p: 2 }} position="static">
                <Toolbar>
                    <Grid sx={{
                        gap: { xs: 2, sm: 0 },
                        alignItems: 'center'
                    }}
                        container>
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                            item xs={12} md={4}>
                            <Avatar sx={{
                                width: 100,
                                height: 100
                            }}
                                alt='avatar image' src={url} />

                            <Typography sx={{ p: 2 }} variant='h5'>
                                {texto}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography sx={{ textAlign: 'center', color: '#bcb4b4' }} variant='h4'>
                                {titulo}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MeuHeader