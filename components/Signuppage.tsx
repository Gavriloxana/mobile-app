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
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { ScrollView } from '@/components/ui/scroll-view';
import { Center } from '@/components/ui/center';
import { router } from 'expo-router';

function Signuppage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = () => {
    const newErrors = {
      name: formData.name.trim().length < 2,
      email: !validateEmail(formData.email),
      password: formData.password.length < 6,
      confirmPassword: formData.password !== formData.confirmPassword,
      phone: !validatePhone(formData.phone),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    
    if (!hasErrors) {
      // Handle successful signup here
      console.log('Sign up successful:', formData);
      alert('สมัครสมาชิกสำเร็จ!');
    }
  };

  return (
    <ScrollView className="flex-1 bg-background-50">
      <Center className="flex-1 p-5">
        <VStack className="w-full max-w-md" space="lg">
          <Heading className="font-bold text-3xl text-center mb-2">
            สมัครสมาชิก
          </Heading>
          <Text className="text-center text-gray-600 mb-6">
            กรุณากรอกข้อมูลเพื่อสร้างบัญชีใหม่
          </Text>

          {/* ชื่อ */}
          <FormControl
            isInvalid={errors.name}
            size="md"
            isRequired
          >
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
            <FormControlHelper>
              <FormControlHelperText>
                กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500" />
              <FormControlErrorText className="text-red-500">
                กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

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

          {/* ยืนยันรหัสผ่าน */}
          <FormControl
            isInvalid={errors.confirmPassword}
            size="md"
            isRequired
          >
            <FormControlLabel>
              <FormControlLabelText>ยืนยันรหัสผ่าน</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size="md">
              <InputField
                type="password"
                placeholder="กรุณายืนยันรหัสผ่าน"
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  setFormData({ ...formData, confirmPassword: text })
                }
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                กรุณากรอกรหัสผ่านให้ตรงกัน
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500" />
              <FormControlErrorText className="text-red-500">
                รหัสผ่านไม่ตรงกัน
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          {/* เบอร์โทรศัพท์ */}
          <FormControl
            isInvalid={errors.phone}
            size="md"
            isRequired={false}
          >
            <FormControlLabel>
              <FormControlLabelText>เบอร์โทรศัพท์ (ไม่บังคับ)</FormControlLabelText>
            </FormControlLabel>
            <Input className="my-1" size="md">
              <InputField
                placeholder="0812345678"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) =>
                  setFormData({ ...formData, phone: text })
                }
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                กรุณากรอกเบอร์โทรศัพท์ 10 หลัก
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500" />
              <FormControlErrorText className="text-red-500">
                กรุณากรอกเบอร์โทรศัพท์ 10 หลัก
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          {/* ปุ่มสมัครสมาชิก */}
          <Button
            className="w-full mt-4"
            size="lg"
            variant="solid"
            action="primary"
            onPress={handleSubmit}
          >
            <ButtonText>สมัครสมาชิก</ButtonText>
          </Button>

          <VStack className="mt-4 items-center" space="sm">
            <Text className="text-gray-500 text-sm">
              มีบัญชีอยู่แล้ว?{' '}
            </Text>
            <Button
              variant="link"
              action="primary"
              onPress={() => router.push('/tabs/(tabs)/login')}
            >
              <ButtonText className="text-primary-600 underline">
                เข้าสู่ระบบ
              </ButtonText>
            </Button>
          </VStack>
        </VStack>
      </Center>
    </ScrollView>
  );
}

export default Signuppage;