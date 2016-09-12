class MyHashMap:

    def __init__(self, size):
        self.size = size
        self.table = [None] * size
        self.count = 0

    def set(self, key, value):
        hash_index = hash(key) % self.size
        for i, val in enumerate(self.table[hash_index:] + self.table[:hash_index]):
            if val == None or val[0] == key:
                self.table[(i + hash_index) % self.size] = [key, value]
                self.count = self.count + 1
                return True
        return False

    def get(self, key):
        hash_index = hash(key) % self.size
        for i, val in enumerate(self.table[hash_index:] + self.table[:hash_index]):
            if val != None and val[0] == key:
                return val[1]
        return None

    def delete(self, key):
        hash_index = hash(key) % self.size
        for i, val in enumerate(self.table[hash_index:] + self.table[:hash_index]):
            if val[0] == key:
                del self.table[(i + hash_index) % self.size]
                self.count = self.count - 1
                return val[1]

    def load(self):
        return self.count / float(self.size)
