import { Box, Field, Input, Stack , Text, Image} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import { useImageContext } from "../contexts/ImageContext";

const MainPage: React.FC = () => {
    const { id } = useParams(); // Extract the user ID from the URL
    const { images} = useImageContext(); // Destructure context

    /**
     * In ideal world, I would have added seperate component files for the search field, with Button submit to search, making the call to fetch new data
     * There is, of course, also text placement option missing. For that I would have added a Select components, that would then affect the text placement
     * with an if statment in the renderer (similar to how isMobile is done), alternatively a formatter
     * For paging, I would have used Pagination from the chakra components that I am using here. 
     */
    return (
        <Box>
            <Field.Root required>
                <Field.Label>
                    Search for an image
                </Field.Label>
                <Input placeholder="Start typing..." />
                <Field.HelperText>It can be anything you want!</Field.HelperText>
            </Field.Root>

            {images.map((image) => (
                <Stack direction={isMobile ? 'column' : 'row'} h="20">
                    <Box pos="relative" boxSize="400px">
                        <Image src={image.url} boxSize="full"/>
                        <Text pos="absolute" top="50%" left="50%" color="red" transform="translate(-50%,-50%)">
                            This text is centered on the image
                        </Text>
                    </Box>
                </Stack>
            ))}

        </Box>
    );
};

export default MainPage;