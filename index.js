const value = {
  status: "success",
  message: "Success.",
  data: {
      id: null,
      user_id: "6f0bc225-accc-48b8-a5d7-02d96fabfa48",
      level: 0,
      accept_vip_staking: false,
      created_at_timestamp: 0,
      updated_at_timestamp: 0,
      total_staking: "0.0",
      level_staking: "0.0",
      next_level: 1,
      next_level_staking: "2000.0"
  }
}

const mapVIPStaking = data => {
  const totalStaking = round(data.total_staking);
  const levelStaking = round(data.level_staking);
  const nextLevelStaking = round(data.next_level_staking);
  const nextStaking = round(nextLevelStaking - totalStaking);
  const nextPercent = round(
    (totalStaking - levelStaking) / (nextLevelStaking - levelStaking),
    4
  );
  return {
    id: data.id,
    level: round(data.level),
    levelStaking,
    nextLevel: round(data.next_level),
    nextLevelStaking,
    totalStaking,
    nextStaking,
    nextPercent,
    userId: data.user_id,
    acceptVipStaking: !!data.accept_vip_staking,
    createdAtTimestamp: data.created_at_timestamp * 1000,
    updatedAtTimestamp: data.updated_at_timestamp * 1000
  }
}

const data  = mapVIPStaking(value)

export default data
