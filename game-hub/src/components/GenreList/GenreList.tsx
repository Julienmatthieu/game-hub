import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

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
                  fontWeight={selectedGenre == genre ? "bold" : "none"}
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
