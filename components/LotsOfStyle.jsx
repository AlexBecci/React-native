import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from "twrnc";

const LotsOfStyle = () => {
    return (
        <View style={tw`max-w-md mx-auto p-8 my-24 bg-white rounded-md shadow-md`
        }>
            <Text style={tw`text-2xl font-semibold mb-6`}> Get in Touch</Text >
            <View style={tw`mb-4`}>
                <Text style={tw`text-gray-700 text-sm font-bold mb-2`}> Your Name</Text >
                <TextInput
                    style={tw`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500`}
                    placeholder="John Doe"
                />
            </View >
            <View style={tw`mb-4`}>
                <Text style={tw`text-gray-700 text-sm font-bold mb-2`}> Your Email</Text >
                <TextInput
                    style={tw`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500`}
                    placeholder="john@example.com"
                />
            </View >
            <View style={tw`mb-6`}>
                <Text style={tw`text-gray-700 text-sm font-bold mb-2`}> Your Message</Text >
                <TextInput
                    style={tw`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500`}
                    multiline
                    numberOfLines={4}
                    placeholder="How can we help you?"
                />
            </View >
            <TouchableOpacity
                style={tw
                    `bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue`
                }
                onPress={() => {
                }}
            >
                <Text style={tw`text-center`}> Send Messagee</Text >
            </TouchableOpacity >
        </View >
    )
}


export default LotsOfStyle