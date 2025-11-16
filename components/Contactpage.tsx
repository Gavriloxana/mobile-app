import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { ScrollView } from '@/components/ui/scroll-view';
import { HStack } from '@/components/ui/hstack';

export default function Contactpage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Contact form submitted:', formData);
      alert('ส่งข้อความสำเร็จ!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  return (
    <ScrollView 
      className="flex-1 bg-background-50"
      contentContainerStyle={{ 
        padding: 20,
        paddingBottom: 40,
        alignItems: 'center'
      }}
      showsVerticalScrollIndicator={true}
    >
      <VStack className="w-full max-w-md" space="lg">
        <Heading className="font-bold text-2xl text-center mb-2">
          ติดต่อเรา
        </Heading>

        {/* ข้อมูลติดต่อ */}
        <Box className="bg-primary-50 p-4 rounded-lg w-full">
          <VStack space="sm">
            <HStack space="sm" className="items-center">
              <Text className="font-semibold text-primary-700">อีเมล:</Text>
              <Text className="text-primary-600">possaweeg@gmail.com</Text>
            </HStack>
            <HStack space="sm" className="items-center">
              <Text className="font-semibold text-primary-700">โทรศัพท์:</Text>
              <Text className="text-primary-600">0619847763</Text>
            </HStack>
          </VStack>
        </Box>

        {/* ฟอร์มติดต่อ */}
        <VStack className="w-full" space="md">
          <FormControl size="md" isRequired>
            <FormControlLabel>
              <FormControlLabelText>ชื่อ</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size="md">
              <InputField
                placeholder="กรุณากรอกชื่อ"
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, name: text })
                }
              />
            </Input>
          </FormControl>

          <FormControl size="md" isRequired>
            <FormControlLabel>
              <FormControlLabelText>อีเมล</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size="md">
              <InputField
                placeholder="example@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
              />
            </Input>
          </FormControl>

          <FormControl size="md" isRequired>
            <FormControlLabel>
              <FormControlLabelText>ข้อความ</FormControlLabelText>
            </FormControlLabel>
            <Textarea className="my-1" size="md">
              <TextareaInput
                placeholder="กรุณากรอกข้อความ..."
                value={formData.message}
                onChangeText={(text) =>
                  setFormData({ ...formData, message: text })
                }
                multiline
                numberOfLines={4}
              />
            </Textarea>
          </FormControl>

          <Button
            className="w-full mt-2"
            size="lg"
            variant="solid"
            action="primary"
            onPress={handleSubmit}
          >
            <ButtonText>ส่งข้อความ</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
