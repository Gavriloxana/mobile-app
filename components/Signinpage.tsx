import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabelText,
  } from '@/components/ui/form-control';
  import { AlertCircleIcon } from '@/components/ui/icon';
  import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
  import { Button, ButtonText, ButtonSpinner } from '@/components/ui/button';
  import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { ScrollView } from '@/components/ui/scroll-view';
import { Center } from '@/components/ui/center';
import { router } from 'expo-router';


function Signinpage() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {
      email: !validateEmail(formData.email),
      password: formData.password.length < 6,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    
    if (!hasErrors) {
      console.log('Sign in successful:', formData);
      alert('เข้าสู่ระบบสำเร็จ!');
    }
  };
  return (
    <ScrollView className="flex-1 bg-background-50">
      <Center className="flex-1 p-5">
        <VStack className="w-full max-w-md" space="lg">
          <Heading className="font-bold text-3xl text-center mb-2">
            เข้าสู่ระบบ
          </Heading>
          <Text className="text-center text-gray-600 mb-6">
            กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ
          </Text>

          {/* อีเมล */}
          <FormControl
            isInvalid={errors.email}
            size="md"
            isRequired
          >
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
            <FormControlHelper>
              <FormControlHelperText>
                กรุณากรอกอีเมลที่ถูกต้อง
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500" />
              <FormControlErrorText className="text-red-500">
                กรุณากรอกอีเมลที่ถูกต้อง
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          {/* รหัสผ่าน */}
          <FormControl
            isInvalid={errors.password}
            size="md"
            isRequired
          >
            <FormControlLabel>
              <FormControlLabelText>รหัสผ่าน</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size="md">
              <InputField
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500" />
              <FormControlErrorText className="text-red-500">
                รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Button
            className="w-full mt-4"
            size="lg"
            variant="solid"
            action="primary"
            onPress={handleSubmit}
          >
            <ButtonText>เข้าสู่ระบบ</ButtonText>
          </Button>
          
          <VStack className="mt-6 items-center" space="sm">
            <Text className="text-gray-500 text-sm">
              ยังไม่มีบัญชี?{' '}
            </Text>
            <Button
              variant="link"
              action="primary"
              onPress={() => router.push('/tabs/(tabs)/tab6')}
            >
              <ButtonText className="text-primary-600 underline">
                สมัครสมาชิก
              </ButtonText>
            </Button>
          </VStack>
        </VStack>
      </Center>
    </ScrollView>
  );
}
export default Signinpage;