import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlateformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

//Query object Patern
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 992px+
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={35}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={0}>
            <Box marginRight={5}>
              <PlateformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlateformSelector>
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(order) =>
                setGameQuery({ ...gameQuery, sortOrder: order })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
