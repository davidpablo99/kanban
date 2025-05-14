import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { TaskBoard } from "./components/TaskBoard";
import { TasksContextProvider } from "./contexts/TasksContext";

export default function App(){
  return(
    <TasksContextProvider>
        <Box maxWidth="80rem" mx="auto">
          <Box height="4rem">
            <Flex align="center" gap="4" height="100%">
              <Heading as="h1" size="8" weight="light">React KanBan</Heading>
              <CreateTaskForm/>
            </Flex>
          </Box>
          <Box>
            <Heading as="h2" mb={"4"}>Quadro de tarefas</Heading>
            <TaskBoard/>
          </Box>
        </Box>
        <Grid columns={"1"} my={"9"}>
          <Flex direction={"column"} align={"center"}>
            <Text size={"2"} color="gray">Desenvolvido por David Queiroz</Text>
          </Flex>
        </Grid>
    </TasksContextProvider>
  )
}
