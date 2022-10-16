import { ActivityIndicator } from 'react-native-paper'
import { useMemo } from "react";
import React from 'react'
import { View } from 'react-native'



const CircularLoader = (props) => {
    const {
        children,
        loading,
        hideLoader = false,
        fixed = false,
        maxContent = false,
    } = props;

    const loaderClassList = useMemo(() => {
        return `${fixed ? `loader fixed` : "loader"}`;
    }, [fixed, hideLoader]);

    return (
        <View className={`${maxContent ? "maxContent" : ""} loader-root`}>
            {loading && (
                <View className={loaderClassList}>
                    <ActivityIndicator animating={true} color={'black'} />
                </View>
            )}
            <View className={loading ? "blur" : ""}>{children}</View>
        </View>
    );
};

export default CircularLoader;
