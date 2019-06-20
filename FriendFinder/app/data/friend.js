// ===============================================================================
// DATA
// Below data will hold all of the friends tables.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsList = [
    {
        name: 'Jean Grey',
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjqzejyg_fiAhXNl-AKHVbIAZEQjhx6BAgBEAM&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACute_dog.jpg&psig=AOvVaw3_Z-gbol8AHXrf3-vDzjF-&ust=1561084719465208',
        scores: [
            '3',
            '5',
            '5',
            '1',
            '5',
            '3',
            '1',
            '1',
            '3',
            '5']
    },
    {
        name: 'Scott Summers',
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjqzejyg_fiAhXNl-AKHVbIAZEQjhx6BAgBEAM&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACute_dog.jpg&psig=AOvVaw3_Z-gbol8AHXrf3-vDzjF-&ust=1561084719465208',
        scores: [
            '5',
            '4',
            '5',
            '1',
            '3',
            '5',
            '1',
            '1',
            '2',
            '1']
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsList;
