import image from "../../Assets/profile.png";

function Profile() {
  return (
    <div className="border flex h-auto border-gray-200 p-10">
      <img
        className="flex items-center justify-center w-24 h-24 mr-2 rounded-full"
        src={image}
        alt="profile"
      />
      <div>
        <div>ชื่อ: ชื่อจริง นามสกุลก็จริง</div>
        <div>รายได้สุทธิของคุณ: 0.00 บาท</div>
        <div>บันทึก: อยากได้เงินก็กรอกมาสิ</div>
      </div>
    </div>
  );
};

export default Profile;
