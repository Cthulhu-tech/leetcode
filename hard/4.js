const findMedianSortedArrays = (nums1, nums2) => {
    
    let i = 0;
    let j = 0;
    let array = [];

    while(i < nums1.length || j < nums2.length) {

        if(nums1[i] > nums2[j]){

            array.push(nums2[j]);

        }

        if(nums1[i] < nums2[j]){

            array.push(nums1[i]);

        }

    }

    console.log(array);

};

module.exports = { findMedianSortedArrays };
