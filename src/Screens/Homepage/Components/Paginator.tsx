import { View, Animated, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";

interface PaginatorProps {
  data: Array<{
    image?: string;
    title: string;
    details: string;
  }>;
  scrollX: any;
  dotColor: string;
}

const Dot = ({ color }: { color: string }) => {
  return <View style={[styles.dot, { backgroundColor: color }]} />;
};

const Paginator: React.FC<PaginatorProps> = ({ data, scrollX, dotColor }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth: Animated.Value = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]}
          />
        );
      })}
    </View>
  );
};
export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    width: 10,
  },
});
