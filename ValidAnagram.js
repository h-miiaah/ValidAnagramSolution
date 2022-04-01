/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    var lenA = s.length;
    var lenB = t.length;
    var map = {};

    if (lenA !== lenB) return false;

    for (var i = 0; i < lenA; i++) {
        if (!map[s[i]]) map[s[i]] = 0;
        map[s[i]]++;
      }

    for (var j = 0; j < lenB; j++) {
        if (!map[t[j]]) return false;
        map[t[j]]--;
      }

      return true;
  };


  /***
   * First, we check if the two strings have the same length.
   * If they don’t, then they can’t be anagrams.
   * Next, we create a map to store the count of each character in the first string.
   * Iterate through the second string and decrement the count of each character.
   * If we encounter a character that doesn’t exist in the map or if its count becomes negative, then the two strings aren’t anagrams.
   * Finally, we check if all the characters in the map have count 0.
   * If they don’t, then the two strings aren’t anagrams.
   * 
   */