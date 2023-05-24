import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import userGenres from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data: genres } = userGenres();

  return (
    <div>
      <List>
        {genres.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Text fontSize="xl">{genre.name}</Text>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default GenreList;
