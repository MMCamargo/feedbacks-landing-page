import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

interface MeuCardProps {
    nome: string,
    url: string,
    rota: string
}

export const MeuCard = ({ nome, url, rota }: MeuCardProps) => {
    const navigate = useNavigate()

    return (
        <Card sx={{
            minWidth: 200,
            alignSelf: 'start',
            m: 5,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
            elevation={7} onClick={() => navigate(rota)}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3
            }}>
                <Avatar sx={{
                    width: 150,
                    height: 150
                }}
                    alt='avatar image' src={url} />

                <Typography color="text.secondary" variant="h6">
                    {nome}
                </Typography>
            </CardContent>
        </Card>
    )
}