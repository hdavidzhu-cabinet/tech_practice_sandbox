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
        pass

    def test_can_insert_elements_that_have_key_collision(self):
        pass

    def test_can_fetch_an_item(self):
        pass

    def test_can_delete_an_item(self):
        pass

    def test_can_display_hashmap_load(self):
        pass

if __name__ == '__main__':
    unittest.main()
