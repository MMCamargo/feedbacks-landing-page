import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Paper, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface ListItems {
    nome: string;
    alt: string;
    url: string;
    path: string;
}

interface MeuMenuProps {
    nome: string;
}

export default function MeuMenu({ nome }: MeuMenuProps) {
    const navigate = useNavigate()

    const listItems: ListItems[] = [
        {
            nome: 'Matheus Mariano',
            url: 'https://media.licdn.com/dms/image/D4D03AQFlsk3zz8OgnA/profile-displayphoto-shrink_800_800/0/1665945633854?e=1680134400&v=beta&t=ukLp-3TchJ8ARg9NAoV6l-h5YGiDN4ffaA87z3qWVfY',
            alt: 'Matheus Avatar',
            path: '/matheus'
        },
        {
            nome: 'Mauricio Lima',
            url: 'https://avatars.githubusercontent.com/u/103398962?v=4',
            alt: 'Mauricio Avatar',
            path: '/mauricio'

        },
        {
            nome: 'Leonardo Farah',
            url: 'https://avatars.githubusercontent.com/u/105401906?v=4',
            alt: 'Leonardo Avatar',
            path: '/leo'

        },
        {
            nome: 'Edyo Campos',
            url: 'https://avatars.githubusercontent.com/u/92989768?v=4',
            alt: 'Edyo Avatar',
            path: '/edyo'

        },
        {
            nome: 'Rogerio Silva',
            url: 'https://avatars.githubusercontent.com/u/106206470?v=4',
            alt: 'Rogerio Avatar',
            path: '/rogerio'
        },
    ]

    return (
        <Paper sx={{ m: 5, bgcolor: '#272727', boxShadow: '0 0 15px 1px white' }}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                <ListItem key='Home' onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/');
                }}>
                    <ListItemAvatar>
                        <HomeIcon sx={{
                            width: 75,
                            height: 75
                        }} />
                    </ListItemAvatar>

                    <ListItemText primary='Home' sx={{ p: 5 }} />
                </ListItem>

                <Divider variant="fullWidth" component="li" />

                {listItems && listItems.filter((item) => item.nome !== nome).map((item) => (
                    <>
                        <ListItem key={item.nome} onClick={() => {
                            window.scrollTo(0, 0);
                            navigate(item.path);
                        }}>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    width: 75,
                                    height: 75
                                }}
                                    alt={item.alt} src={item.url} />
                            </ListItemAvatar>

                            <ListItemText primary={item.nome} sx={{ p: 5 }} />
                        </ListItem>

                        <Divider variant="fullWidth" component="li" />
                    </>
                ))}
            </List>
        </Paper>
    );
}