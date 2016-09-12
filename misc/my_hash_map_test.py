import unittest
from my_hash_map import MyHashMap

# What should we test in a hashmap?
# - Can it insert an element?
# - What if the hashmap is full?
# - Can it insert an element with a key collision?
# - Can it fetch the item?
# - Can it delete an item?
# - Does it accurately display how full the hashmap is?

class MyHashMapTest(unittest.TestCase):

    def setUp(self):
        self.hashmap = MyHashMap(5)

    def tearDown(self):
        pass

    def test_can_insert_an_element(self):
        inserted = self.hashmap.set("banana", {
            "fake_key": "fake_data",
            "fake_key_2": "more fake data"
        })
        self.assertTrue(inserted)
        returned = self.hashmap.get("banana")
        self.assertEqual(returned["fake_key"], "fake_data")

    def test_cannot_insert_an_element_when_full(self):
        for i in range(6):
            inserted = self.hashmap.set(str(i), "test")
        self.assertFalse(inserted)
        self.assertEqual(self.hashmap.load(), 1)

    def test_can_insert_elements_that_have_key_collision(self):
        key1 = "abcd"
        key2 = "abck"
        self.assertEqual(hash(key1) % 5, hash(key2) % 5)
        self.hashmap.set(key1, "key1_data")
        self.hashmap.set(key2, "key2_data")
        self.assertEqual(self.hashmap.load(), 0.4)
        self.assertEqual(self.hashmap.get(key1), "key1_data")
        self.assertEqual(self.hashmap.get(key2), "key2_data")

    def test_can_fetch_an_item(self):
        self.hashmap.set("banana", 3)
        self.assertEqual(self.hashmap.get("banana"), 3)

    def test_can_delete_an_item(self):
        self.hashmap.set("banana", 3)
        self.assertEqual(self.hashmap.load(), 0.2)
        self.hashmap.delete("banana")
        self.assertEqual(self.hashmap.load(), 0)
        self.assertEqual(self.hashmap.get("banana"), None)

    def test_can_display_hashmap_load(self):
        for i in range(5):
            self.hashmap.set(str(i), "test")
            self.assertEqual(self.hashmap.load(), float(i + 1) / 5)

if __name__ == '__main__':
    unittest.main()
