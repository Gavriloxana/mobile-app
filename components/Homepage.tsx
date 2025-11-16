import React from 'react';

import { ExternalLink } from './ExternalLink';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { ScrollView } from '@/components/ui/scroll-view';



export default function Homepage({ path }: { path: string }) {
  return (
    <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
    <VStack space="md" reversed={false}>
    <HStack space="md" reversed={false}>

    <Card className="p-5 rounded-lg max-w-[360px] m-3">
    <Image
      source={{
        uri: 'https://www.tradeinn.com/f/13709/137091090/mt-helmets-kre-snake-carbon-2.0-full-face-helmet.webp',
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt="image"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
      เครืองแต่งการขี่รถจักยานยนต์
    </Text>
    <VStack className="mb-6">
      <Heading size="md" className="mb-4">
        mt-helmet
      </Heading>
      <Text size="sm">
        อุปกรณ์ป้องกันคุณตาย
      </Text>
      <Text className="text-primary-600 font-bold text-lg mt-2">
        ฿1,290
      </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
      <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button
        variant="outline"
        className="px-4 py-2 border-outline-300 sm:flex-1"
      >
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box>
  </Card>
  <Card className="p-5 rounded-lg max-w-[360px] m-3">
    <Image
      source={{
        uri: 'https://tse1.mm.bing.net/th/id/OIP.GTZHHzxFV9HuZxfFHlu4CwHaE8?cb=ucfimg2ucfimg=1&w=490&h=327&rs=1&pid=ImgDetMain&o=7&rm=3',
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt="image"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
      อาหารเครื่องดื่ม
    </Text>
    <VStack className="mb-6">
      <Heading size="md" className="mb-4">
        เบอร์ริโต้
      </Heading>
      <Text size="sm">
       รสชาติดั้งเดิมจากเม็กซิกันโน้
      </Text>
      <Text className="text-primary-600 font-bold text-lg mt-2">
        ฿199
      </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
      <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button
        variant="outline"
        className="px-4 py-2 border-outline-300 sm:flex-1"
      >
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box>
  </Card>
  <Card className="p-5 rounded-lg max-w-[360px] m-3">
    <Image
      source={{
        uri: 'https://s359.kapook.com/config-desktop/f3bf3660-37f8-4a14-8ab4-2d1bbbce3fe7.jpg',
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt="image"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
    อาหารเครื่องดื่ม
    </Text>
    <VStack className="mb-6">
      <Heading size="md" className="mb-4">
        หมา
      </Heading>
      <Text size="sm">
        อาหารฉุกเฉิน
      </Text>
      <Text className="text-primary-600 font-bold text-lg mt-2">
        ฿89
      </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
      <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button
        variant="outline"
        className="px-4 py-2 border-outline-300 sm:flex-1"
      >
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box>
  </Card>
  </HStack>

  <HStack space="md" reversed={false}>
    <Card className="p-5 rounded-lg max-w-[360px] m-3">
    <Image
      source={{
        uri: 'https://tse1.mm.bing.net/th/id/OIP.iKSuvTefK-f_h6vmdF6sXQHaD4?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt="image"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
      อาหารเครื่องดื่ม
    </Text>
    <VStack className="mb-6">
      <Heading size="md" className="mb-4">
        เคบั่บไก่
      </Heading>
      <Text size="sm">
        หอมเครื่องเทศแน่นๆ
      </Text>
      <Text className="text-primary-600 font-bold text-lg mt-2">
        ฿249
      </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
      <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button
        variant="outline"
        className="px-4 py-2 border-outline-300 sm:flex-1"
      >
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box>
  </Card>
  <Card className="p-5 rounded-lg max-w-[360px] m-3">
    <Image
      source={{
        uri: 'https://img.wongnai.com/p/1920x0/2018/04/16/b09f95a3ef504293be122f985d8e877f.jpg',
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt="image"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
    อาหารเครื่องดื่ม
    </Text>
    <VStack className="mb-6">
      <Heading size="md" className="mb-4">
        พิกซ่าหน้าฮาวายเอี้ยน
      </Heading>
      <Text size="sm">
        หน้าอร่อยที่คนอิตาลีไม่ชอบ
      </Text>
      <Text className="text-primary-600 font-bold text-lg mt-2">
        ฿299
      </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
      <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button
        variant="outline"
        className="px-4 py-2 border-outline-300 sm:flex-1"
      >
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box>
  </Card>
  <Card className="p-5 rounded-lg max-w-[360px] m-3">
    <Image
      source={{
        uri: 'https://www.gourmetandcuisine.com/Images/cooking/recipes/recipe_754detail.jpg',
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt="image"
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
    อาหารเครื่องดื่ม
    </Text>
    <VStack className="mb-6">
      <Heading size="md" className="mb-4">
        ไก่ซอสเผ็ดมหาประลัย
      </Heading>
      <Text size="sm">
        เผ็ดนรกแตกแสบดาก
      </Text>
      <Text className="text-primary-600 font-bold text-lg mt-2">
        ฿179
      </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
      <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button
        variant="outline"
        className="px-4 py-2 border-outline-300 sm:flex-1"
      >
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box>
  </Card>
  </HStack>
  </VStack>
  </ScrollView>
  
  );
}
