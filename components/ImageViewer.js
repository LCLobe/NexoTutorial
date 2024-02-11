import { StyleSheet, Image }   from "react-native";

export default function ImageViewer({placeholderImageSource}){
    return (
        <Image source={placeholderImageSource} style={styles.image} />
    );
}

// const ImageViewer = ({placeholderImageSource}) => {
//     return (
//         <Image source={placeholderImageSource} style={styles.image} />
//     );
// }

// export default ImageViewer;

const styles = StyleSheet.create({
    image:{
        width:320,
        height: 440,
        borderRadius: 18,
    },
});

