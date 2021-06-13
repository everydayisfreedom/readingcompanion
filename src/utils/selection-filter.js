export default function selectionFilter({ stories } = []) {
    return {
      stories: [
        { title: '', data: stories?.filter((item) => item.avg_dtp < -1  ) },
        { title: 'Stories with a Dependency Tree Depth Average Lower than 2.5', data: stories?.filter((item) => item.avg_dtp < 2.5  ) },
        { title: 'Stories with a Dependency Tree Depth Average Between 2.5 and 4.5', data: stories?.filter((item) => item.avg_dtp > 2.5 && item.avg_dtp < 4.5)},
        { title: 'Stories with a Dependency Tree Depth Average Higher than 4.5', data: stories?.filter((item) => item.avg_dtp > 4.5)},
        { title: 'Stories for Children Below Age 8', data: stories?.filter((item) => item.high_aoa <= 8)},
        { title: 'Stories for Children up to Age 12', data: stories?.filter((item) => item.high_aoa >= 8 &&  item.high_aoa <= 12)},
        { title: 'Stories for Ages 12 and Up', data: stories?.filter((item) => item.high_aoa >= 12)},
        { title: 'Negative Stories', data: stories?.filter((item) => item.avg_neg > 0.05  && item.avg_pos < 0.05 ) },
        { title: 'Positive Stories', data: stories?.filter((item) => item.avg_neg < 0.02  && item.avg_pos > 0.08) },
        { title: 'Stories with the Most Joy Expressed', data: stories?.filter((item) => item.joy > 0.06 ) },
        { title: 'Stories with the Most Sadness Expressed', data: stories?.filter((item) => item.sadness > 0.04) },
        { title: 'Stories with the Most Concreteness', data: stories?.filter((item) => item.mean > 2.8 ) },
        { title: 'Stories with the Lowest Concreteness', data: stories?.filter((item) => item.mean < 2.3 ) },
      ],
    };
  }