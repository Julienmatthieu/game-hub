import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import userGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = userGenres();

  if (error) return null;
  else if (isLoading) return <Spinner />;

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
                <Button
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  fontSize="xl"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default GenreList;
