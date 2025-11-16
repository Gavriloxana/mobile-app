import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableData,
  TableFooter,
} from '@/components/ui/table';
import { ScrollView } from '@/components/ui/scroll-view';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';

const products = [
  {
    id: 1,
    name: 'mt-helmet',
    category: 'เครื่องแต่งการขี่รถจักรยานยนต์',
    description: 'อุปกรณ์ป้องกันคุณตาย',
    price: 1290,
  },
  {
    id: 2,
    name: 'เบอร์ริโต้',
    category: 'อาหารเครื่องดื่ม',
    description: 'รสชาติดั้งเดิมจากเม็กซิกัน',
    price: 199,
  },
  {
    id: 3,
    name: 'หมา',
    category: 'อาหารเครื่องดื่ม',
    description: 'อาหารฉุกเฉิน',
    price: 89,
  },
  {
    id: 4,
    name: 'เคบั่บไก่',
    category: 'อาหารเครื่องดื่ม',
    description: 'หอมเครื่องเทศแน่นๆ',
    price: 249,
  },
  {
    id: 5,
    name: 'พิกซ่าหน้าฮาวายเอี้ยน',
    category: 'อาหารเครื่องดื่ม',
    description: 'หน้าอร่อยที่คนอิตาลีไม่ชอบ',
    price: 299,
  },
  {
    id: 6,
    name: 'ไก่ซอสเผ็ดมหาประลัย',
    category: 'อาหารเครื่องดื่ม',
    description: 'เผ็ดนรกแตกแสบดาก',
    price: 179,
  },
];

function Listpage() {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <ScrollView className="flex-1 bg-background-50">
      <VStack className="p-5" space="md">
        <Heading className="font-bold text-2xl mb-4">รายการสินค้า</Heading>
        
        <Box className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>ชื่อสินค้า</TableHead>
                <TableHead>หมวดหมู่</TableHead>
                <TableHead>ราคา</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableData>{product.name}</TableData>
                  <TableData>{product.category}</TableData>
                  <TableData>฿{product.price.toLocaleString()}</TableData>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableHead>รวมทั้งหมด</TableHead>
                <TableHead>{products.length} รายการ</TableHead>
                <TableHead>฿{totalPrice.toLocaleString()}</TableHead>
              </TableRow>
            </TableFooter>
          </Table>
        </Box>
      </VStack>
    </ScrollView>
  );
}

export default Listpage;