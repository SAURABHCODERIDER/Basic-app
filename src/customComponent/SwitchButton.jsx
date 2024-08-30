import { View, Text, Animated, StyleSheet,TouchableOpacity} from 'react-native'
import React, { useCallback, useRef,} from 'react'

export default function SwitchButton({thubmSize=20,disabled=false,isEnabled,style,onPress}) {
    const thumbPosition = useRef(new Animated.Value(isEnabled?1:0)).current
    const toggleSwitch = useCallback(()=>{
        if(!disabled){
            Animated.timing(thumbPosition,{
                toValue:isEnabled?1:0,
                duration:200,
                useNativeDriver:false
            }).start(onPress);
        }
    },[isEnabled,disabled,onPress,thumbPosition])
    const thumbStyle={
        width:thubmSize,
        height:thubmSize,
        borderRadius:thubmSize/2,
        backgroundColor:"#000",
        position:"absolute",
        transform:[{

            translateX:thumbPosition.interpolate({
                inputRange:[0,1],
                outputRange:[2,22]
            })
        }
        ]
    }
    const trackStyle = {
        backgroundColor:disabled?"#3d575c":isEnabled?"#3d575c":"#3d575c"
    }
  return (
    <TouchableOpacity style={[styles.track,trackStyle]} onPress={toggleSwitch} activeOpacity={disabled?1:0.7} disabled={disabled}>
          <Animated.View style={thumbStyle}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    track:{
        width:42,
        height:20,
        borderRadius:12,
        justifyContent:"center",
        padding:1
    }
})