import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, Pressable, ActivityIndicator, NativeModules } from 'react-native';
import FontAwesome from "react-native-vector-icons/Ionicons";
import * as Utils from './utils/Utils'
import Global from './Global.js'

const { AdmobInitiator } = NativeModules;
class MapView extends Component {
    constructor(props) {
        super(props)
        this.state = { position: props.route.params.position }
    }
    render () {
        return (
            <View style={{flexDirection: 'column', flex:1}}>
                <WebView style={{zIndex: 0}}
                    source={{
                    uri: 'http://165.227.137.116/map1.html',
                    }}
                    injectedJavaScript={Utils.jsCode(
                    this.state.position[0],
                    this.state.position[1],
                    Global.radius,
                    )}
                    javaScriptEnabledAndroid={true}
                    startInLoadingState={true}
                    scalesPageToFit={false}
                    renderLoading={
                        () => {
                            return (<ActivityIndicator color="#ff6a00" size="large" style={{alignSelf:'center', marginBottom: '35%'}}/> )
                        }
                    }
                >
                </WebView>
                <View style={{position: 'absolute', left: 20, top: 40, zIndex: 5, elevation: 30}}>
                <Pressable onPress={(e)=>{this.props.navigation.goBack(); AdmobInitiator.showAd();}}>
                    <View style={{width: 60, height: 60, backgroundColor: "#02316e", borderRadius: 50, alignItems: 'center', justifyContent: 'center', }} >
                    <FontAwesome
                        name={"arrow-back-outline"}
                        size={30}
                        color="#ffffff" 
                    />
                    </View>
                </Pressable>
                </View>
            </View>
        );
    }
}
export default MapView;