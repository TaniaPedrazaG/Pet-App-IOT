import { Pets } from "@mui/icons-material"
import { AppBar, Toolbar, Typography } from "@mui/material"

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Pets
                    color="info"
                    fontSize="large"
                    sx={{ marginRight: '10px' }}
                />
                <Typography variant="h3">
                    AnimalAppetite
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar