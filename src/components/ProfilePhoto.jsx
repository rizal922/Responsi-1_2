import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import Swal from 'sweetalert2';

const ProfilePhoto = () => {
  const [photo, setPhoto] = useState('/api/placeholder/200/200');
  const [isHovering, setIsHovering] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      if (!file.type.startsWith('image/')) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid File Type',
          text: 'Please upload an image file',
          confirmButtonColor: '#3B82F6'
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        Swal.fire({
          icon: 'error',
          title: 'File Too Large',
          text: 'Please upload an image smaller than 5MB',
          confirmButtonColor: '#3B82F6'
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        Swal.fire({
          icon: 'success',
          title: 'Photo Updated!',
          showConfirmButton: false,
          timer: 1500
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="mb-12 flex justify-center">
      <div className="relative">
        <div
          className="w-48 h-48 rounded-full overflow-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={photo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {isHovering && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <label 
                htmlFor="photo-upload" 
                className="cursor-pointer text-white flex flex-col items-center"
              >
                <Camera className="w-8 h-8 mb-2" />
                <span className="text-sm">Change Photo</span>
              </label>
            </div>
          )}
        </div>
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />
        {!isHovering && !photo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Upload className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfilePhoto;