import { TextInput, TextInputProps } from "react-native";

export default function Input({ ...rest }: TextInputProps) {
    return <TextInput style={{height: 40,
                backgroundColor: '#f9f7f7', 
                borderColor: '#62615b', 
                borderRadius: 7, 
                paddingHorizontal: 16,}}
                {...rest} />;

}