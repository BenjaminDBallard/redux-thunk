import React from 'react'
import { Container, Button, Table, TableHead, TableBody, TableRow, TableCell, Menu, MenuItem, IconButton} from '@mui/material'
import { MoreVert } from '@mui/icons-material'

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Container>
            <Button variant='contained' onClick={props.fetchMakes} sx={{margin: '20px 0'}}>Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => {
                        return(
                            <TableRow key={idx}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    id={idx}>
                                        <MoreVert/>
                                    </IconButton>
                                    <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}>
                                        <MenuItem onClick={handleClose}>
                                            <Button size='small' onClick={() => props.deleteMake(idx)}>Delete</Button>
                                        </MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import