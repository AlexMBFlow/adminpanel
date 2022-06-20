import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

export const Layout = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={2} >
                    <Container maxWidth={"sm"}>
                        <Stack spacing={4} direction="column">
                            <Button variant="outlined">Store</Button>
                            <Button variant="outlined">Все заказы</Button>
                        </Stack>
                    </Container>
                </Grid>
                <Grid item xs={10} >
                    content 2
                </Grid>
            </Grid>
        </Box>
    )
}