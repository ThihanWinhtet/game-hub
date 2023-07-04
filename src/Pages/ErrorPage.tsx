import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../Components/NavBar";
import { Box, Heading } from "@chakra-ui/react";

const ErrorPage = () => {
   const error = useRouteError();
  return (
    <>
    <NavBar/>
    <Box padding={5}>

    <Heading>Oops</Heading>
    <p> {isRouteErrorResponse(error) ? 'This page does not exist.' : 'Sorry, an unexpected error occurred.'} </p>
    </Box>
    </>
  )
}

export default ErrorPage