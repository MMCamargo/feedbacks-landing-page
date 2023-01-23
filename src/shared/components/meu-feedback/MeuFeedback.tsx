import { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

interface MeuFeedbackProps {
    feedback: string
}

export const MeuFeedback = ({ feedback }: MeuFeedbackProps) => {
    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)

    return (
        <Card sx={{
            minWidth: 200,
            m: 5,
        }}
            elevation={7}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3
            }}>

                <Typography color="text.secondary" variant="h5">
                    {feedback}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
                    <Typography color="text.secondary" variant="h6"
                        sx={{ border: '1px solid #fafafa', borderRadius: '5px', cursor: 'pointer', mr: 1, paddingY: 0.3, paddingX: 1 }}
                        onClick={() => setLikeCount(likeCount + 1)}
                        onContextMenu={(e) => {
                            e.preventDefault()
                            likeCount > 0 ? setLikeCount(likeCount - 1) : setLikeCount(0)
                        }}>
                        <Box component='span'>
                            <FavoriteIcon sx={{ color: 'red', mb: -0.5, mr: 0.3 }} />
                        </Box>
                        {likeCount}
                    </Typography>

                    <Typography color="text.secondary" variant="h6"
                        sx={{ border: '1px solid #fafafa', borderRadius: '5px', cursor: 'pointer', paddingY: 0.3, paddingX: 1 }}
                        onClick={() => setDislikeCount(dislikeCount + 1)}
                        onContextMenu={(e) => {
                            e.preventDefault()
                            dislikeCount > 0 ? setDislikeCount(dislikeCount - 1) : setDislikeCount(0)
                        }}>
                        <Box component='span'>
                            <SentimentVeryDissatisfiedIcon sx={{ color: 'steelblue', mb: -0.5, mr: 0.3 }} />
                        </Box>
                        {dislikeCount}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}