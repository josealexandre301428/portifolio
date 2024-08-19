import Box from "../src/components/Box";
import theme from "../src/theme/theme";

export default function HomeScreen() {
    return (
        <Box
            tag="main"
            styleSheet={{
                fontFamily: theme.typography.fontFamily,
            }}
        >
            <h1>Home Screen</h1>
        </Box>
    )
}