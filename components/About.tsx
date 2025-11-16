import React from 'react';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { ScrollView } from '@/components/ui/scroll-view';
import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Divider } from '@/components/ui/divider';

export default function About() {
  return (
    <ScrollView className="flex-1 bg-background-50">
      <VStack className="p-5" space="lg">
        {/* หัวข้อหลัก */}
        <Center className="mb-4">
          <Heading className="font-bold text-3xl text-center mb-2">
            เกี่ยวกับฉัน
          </Heading>
          <Divider className="w-24 h-1 bg-primary-500 rounded-full" />
        </Center>

        {/* ข้อมูลส่วนตัว */}
        <Card className="p-5 rounded-lg bg-white shadow-md">
          <VStack space="md">
            <Heading size="lg" className="text-primary-700">
              ข้อมูลส่วนตัว
            </Heading>
            <Text className="text-gray-700 leading-6">
              นายพศวีร์ 027 IT2/2
            </Text>
          </VStack>
        </Card>
        {/* ข้อมูลติดต่อ */}
        <Card className="p-5 rounded-lg bg-primary-50 shadow-md">
          <VStack space="md">
            <Heading size="lg" className="text-primary-700">
              ข้อมูลติดต่อ
            </Heading>
            <VStack space="sm">
              <HStack space="sm" className="items-center">
                <Text className="font-semibold text-gray-700 w-20">อีเมล:</Text>
                <Text className="text-primary-600 flex-1">possaweegg@gmail.com</Text>
              </HStack>
              <HStack space="sm" className="items-center">
                <Text className="font-semibold text-gray-700 w-20">โทรศัพท์:</Text>
                <Text className="text-gray-600 flex-1">0619847763</Text>
              </HStack>
              <HStack space="sm" className="items-center">
                <Text className="font-semibold text-gray-700 w-20">GitHub:</Text>
                <Text className="text-primary-600 flex-1">github.com/garviloxna</Text>
              </HStack>
              <HStack space="sm" className="items-center">
                <Text className="font-semibold text-gray-700 w-20">LinkedIn:</Text>
                <Text className="text-primary-600 flex-1">linkedin.com/in/yourprofile</Text>
              </HStack>
            </VStack>
          </VStack>
        </Card>
      </VStack>
    </ScrollView>
  );
}

